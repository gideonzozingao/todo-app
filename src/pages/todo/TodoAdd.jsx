
import { Box, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

function TodoAdd() {
    const [item, setItem] = useState('')
    const [itemList, setItemList] = useState([]);
    const handleKeyDown = (event) => {
        if (event.key == "Enter") {
            if (item != "") {
                setItemList([...itemList, item]);
                setItem('')
            }
        }
    };
    return (
        <Box sx={{ mr: 4, ml: 4, mt: 4 }}>

            <CardContent sx={{ width: 600, margin: "auto" }}>
                <TextField size='lg' fullWidth label='New Item' value={item} type='text' onChange={(e) => setItem(e.target.value)} onKeyDown={handleKeyDown} />
            </CardContent>

            <Box>
                {itemList && itemList.length > 0 ? <div>{JSON.stringify(itemList)}</div> : <div></div>}
            </Box>

        </Box >

    )
}

export default TodoAdd
