import TableOne from "../../../../component/Tables/TableOne";
import DefaultLayout from "../../../../component/Layouts/DefaultLayout";


const TablesPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;