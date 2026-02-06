"use server";

export async function logActivity(formData: FormData) {
  // Extracting data to prove the plumbing works
  const data = Object.fromEntries(formData.entries());

  console.log("--- Dummy Action ---");
  console.table(data);

  // Fake delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1));
}
