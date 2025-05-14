import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export default async function Page() {
  const customers = await fetchFilteredCustomers('');

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}
