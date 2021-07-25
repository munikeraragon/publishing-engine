import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

export interface UserGridProps {
    users: User[];
}
export interface User {
    userName: string;
    locale: string;
    email: string;
    creationDate: string;
}
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'userName',
        headerName: 'User name',
        width: 150
    },
    {
        field: 'locale',
        headerName: 'Location',
        width: 150
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 260
    },
    {
        field: 'creationDate',
        headerName: 'Creation Date',
        width: 240
    }
];

export const UserGrid: React.FC<UserGridProps> = ({ users }) => {
    return (
        <DataGrid
            rows={users}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
        />
    );
};
