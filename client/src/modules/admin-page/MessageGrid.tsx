import { DataGrid, GridColDef } from '@material-ui/data-grid';

export interface MessageGridProps {
    messages: Message[];
}
export interface Message {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    country: string;
    creationDate: string;
    phone: string;
}
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 150
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 150
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 260
    },
    {
        field: 'company',
        headerName: 'Company',
        width: 150
    },
    {
        field: 'country',
        headerName: 'Country',
        width: 150
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 150
    },
    {
        field: 'creationDate',
        headerName: 'Creation Date',
        width: 240
    }
];

export const MessageGrid: React.FC<MessageGridProps> = ({ messages }) => {
    return (
        <DataGrid
            rows={messages}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
        />
    );
};
