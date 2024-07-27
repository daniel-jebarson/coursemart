import { Table } from 'antd';

const DataTable = ({ columns, data }) => <Table columns={columns} dataSource={data} />;
export default DataTable;