-- Block duplicate entries:
-- Prevent the same actor from performing the same verb on the same object with the same delta at the same second.
ALTER TABLE activity_stream 
ADD CONSTRAINT prevent_duplicate_ops 
UNIQUE (actor, verb, object_type, delta, created_at);
