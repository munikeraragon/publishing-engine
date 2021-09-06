import { DataGrid, GridColDef, GridSelectionModel } from '@material-ui/data-grid';
import { useState } from 'react';
import { useDeletePostMutation } from '../../generated/apolloComponents';
import _ from 'lodash';

export interface Post {
    id: string;
    title: string;
    prettyTitle: string;
    userName: string;
    userIcon: string;
    tags: string[];
    userPicture: string;
    description: string;
    mainImageId: number;
    comments: number;
    likes: number;
    saved: number;
    words: number;
    paragraphs: number;
    readingTime: number;
    creationDate: string;
}

export interface PostGridProps {
    posts: Post[];
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'title',
        headerName: 'title',
        width: 150
    },
    {
        field: 'title',
        headerName: 'title',
        width: 150
    },
    {
        field: 'username',
        headerName: 'username',
        width: 150
    },
    {
        field: 'title',
        headerName: 'title',
        width: 150
    },
    {
        field: 'comments',
        headerName: 'comments',
        width: 150
    },
    {
        field: 'likes',
        headerName: 'likes',
        width: 150
    },
    {
        field: 'words',
        headerName: 'words',
        width: 260
    },
    {
        field: 'paragraphs',
        headerName: 'paragraphs',
        width: 240
    },
    {
        field: 'readingTime',
        headerName: 'readingTime',
        width: 240
    },
    {
        field: 'creationDate',
        headerName: 'creationDate',
        width: 240
    }
];

export const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
    const [selected, setSelected] = useState<GridSelectionModel>([]);
    const [deletePost] = useDeletePostMutation();

    const onDelete = async () => {
        await Promise.all(
            _.map(selected, async (id) => {
                deletePost({ variables: { postId: Number(id) } });
            })
        );
    };

    function EditToolbar() {
        return (
            <div className='flex h-12 items-center'>
                {selected.length > 0 && (
                    <button
                        onClick={onDelete}
                        className='bg-gray-300 hover:bg-gray-400 text-gray-800
                        font-medium py-2 px-4 rounded-md mx-auto text-md'>
                        Delete
                    </button>
                )}
            </div>
        );
    }

    return (
        <DataGrid
            rows={posts}
            columns={columns}
            pageSize={5}
            components={{
                Toolbar: EditToolbar
            }}
            checkboxSelection
            disableSelectionOnClick
            selectionModel={selected}
            onSelectionModelChange={(newSelectionModel) => setSelected(newSelectionModel)}
        />
    );
};
