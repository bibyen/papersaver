CREATE TABLE activity_stream (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- Unique identifier for each activity
    company_id VARCHAR(50) NOT NULL, -- Multi-tenancy support
    
    -- Actor-Verb-Object Pattern
    actor VARCHAR(100) NOT NULL, -- e.g., "user:123", "system", "integration:abc"
    verb VARCHAR(50) NOT NULL, -- e.g., "created", "updated", "deleted", "synced"
    object_type VARCHAR(50) NOT NULL, -- e.g., "contact", "deal", "task"
    object_id VARCHAR(100), -- e.g., "contact:456", "deal:789"
    
    -- Numeric tracking
    delta NUMERIC(15, 2) DEFAULT 0, -- Change in value (e.g., revenue change, time spent)
    unit VARCHAR(20),
    
    -- Flexible metadata & versioning
    metadata JSONB DEFAULT '{}', -- Additional context
    schema_version VARCHAR(10) DEFAULT '1.0', -- Future proofing for schema changes
    
    created_at TIMESTAMPTZ DEFAULT NOW() -- Timezone-aware timestamp for accurate ordering and querying
);

-- Indices for faster syncing and filtering
CREATE INDEX idx_stream_company_sync ON activity_stream (company_id, created_at DESC); -- by company and time
CREATE INDEX idx_stream_object ON activity_stream (object_type, object_id); -- for object-based queries
