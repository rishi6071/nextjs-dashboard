import { Suspense } from "react";
import CustomersTable from "@/app/ui/customers/table";
import { CustomersTableSkeleton } from "@/app/ui/skeletons";
import Search from "@/app/ui/search";
import { lusitana } from "@/app/ui/fonts";

export default async function Page(props: {
  searchParams: Promise<{ query?: string }>;
}) {
  const params = await props.searchParams;
  return (
    <main>
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />

      <Suspense fallback={<CustomersTableSkeleton />}>
        <CustomersTable query={params.query || ""} />
      </Suspense>
    </main>
  );
}
