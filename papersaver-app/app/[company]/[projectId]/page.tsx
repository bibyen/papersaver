import "@/app/ledger.css";
import { logActivity } from "../../actions";
import { Container, PillSelect, Counter, Button } from "@/components/ui";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ company: string; projectId: string }>;
}) {
  const { company, projectId } = await params;

  return (
    <Container>
      <header style={{ marginBottom: "32px" }}>
        <p className="ledger-label" style={{ color: "#000000" }}>
          {company}
        </p>
        <h1
          style={{
            color: "#000000",
            fontSize: "32px",
            fontWeight: "900",
            margin: 0,
          }}
        >
          {projectId}
        </h1>
      </header>

      <form action={logActivity}>
        <input type="hidden" name="company" value={company} />
        <input type="hidden" name="projectId" value={projectId} />

        {/* Action Selection */}
        <PillSelect
          label="Select Action"
          name="verb"
          options={["Delivered", "Consumed", "Waste"]}
        />

        {/* Object Selection */}
        <PillSelect
          label="Select Object"
          name="object"
          options={["Concrete", "Fuel", "Gravel"]}
        />

        {/* Operator Selection */}
        <PillSelect
          label="Select Operator"
          name="actor"
          options={["Unit-01", "Unit-02", "External"]}
        />

        {/* Magnitude Counter */}
        <Counter label="Quantity (Delta)" name="delta" />

        {/* Operator Selection */}
        <PillSelect
          label="Select units"
          name="unit"
          options={["kg", "L", "m3"]}
        />

        <Button type="submit">submit log</Button>
      </form>

      <footer
        style={{ marginTop: "auto", textAlign: "center", padding: "24px 0" }}
      >
        <p className="ledger-label">v1.</p>
      </footer>
    </Container>
  );
}
