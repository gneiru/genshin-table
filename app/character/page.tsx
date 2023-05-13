import { getData } from "@/lib/api";
import { columns } from "./columns";
import { DataTable } from "./data-table";


export default async function DemoPage() {
  const data = await getData();
  console.log(data);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
