import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Tooltip from '@mui/material/Tooltip';

export default function SearchBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        {
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        {
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
        },
        {
            title: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
        },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        {
            title: 'The Lord of the Rings: The Two Towers',
            year: 2002,
        },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Seven Samurai', year: 1954 },
        {
            title: 'Star Wars: Episode IV - A New Hope',
            year: 1977,
        },
        { title: 'City of God', year: 2002 },
        { title: 'Se7en', year: 1995 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: 'Life Is Beautiful', year: 1997 },
        { title: 'The Usual Suspects', year: 1995 },
        { title: 'Léon: The Professional', year: 1994 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'Saving Private Ryan', year: 1998 },
        { title: 'Once Upon a Time in the West', year: 1968 },
        { title: 'American History X', year: 1998 },
        { title: 'Interstellar', year: 2014 },
        { title: 'Casablanca', year: 1942 },
        { title: 'City Lights', year: 1931 },
        { title: 'Psycho', year: 1960 },
        { title: 'The Green Mile', year: 1999 },
        { title: 'The Intouchables', year: 2011 },
        { title: 'Modern Times', year: 1936 },
        { title: 'Raiders of the Lost Ark', year: 1981 },
        { title: 'Rear Window', year: 1954 },
        { title: 'The Pianist', year: 2002 },
        { title: 'The Departed', year: 2006 },
        { title: 'Terminator 2: Judgment Day', year: 1991 },
        { title: 'Back to the Future', year: 1985 },
        { title: 'Whiplash', year: 2014 },
        { title: 'Gladiator', year: 2000 },
        { title: 'Memento', year: 2000 },
        { title: 'The Prestige', year: 2006 },
        { title: 'The Lion King', year: 1994 },
        { title: 'Apocalypse Now', year: 1979 },
        { title: 'Alien', year: 1979 },
        { title: 'Sunset Boulevard', year: 1950 },
        {
            title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
            year: 1964,
        },
        { title: 'The Great Dictator', year: 1940 },
        { title: 'Cinema Paradiso', year: 1988 },
        { title: 'The Lives of Others', year: 2006 },
        { title: 'Grave of the Fireflies', year: 1988 },
        { title: 'Paths of Glory', year: 1957 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Shining', year: 1980 },
        { title: 'WALL·E', year: 2008 },
        { title: 'American Beauty', year: 1999 },
        { title: 'The Dark Knight Rises', year: 2012 },
        { title: 'Princess Mononoke', year: 1997 },
        { title: 'Aliens', year: 1986 },
        { title: 'Oldboy', year: 2003 },
        { title: 'Once Upon a Time in America', year: 1984 },
        { title: 'Witness for the Prosecution', year: 1957 },
        { title: 'Das Boot', year: 1981 },
        { title: 'Citizen Kane', year: 1941 },
        { title: 'North by Northwest', year: 1959 },
        { title: 'Vertigo', year: 1958 },
        {
            title: 'Star Wars: Episode VI - Return of the Jedi',
            year: 1983,
        },
        { title: 'Reservoir Dogs', year: 1992 },
        { title: 'Braveheart', year: 1995 },
        { title: 'M', year: 1931 },
        { title: 'Requiem for a Dream', year: 2000 },
        { title: 'Amélie', year: 2001 },
        { title: 'A Clockwork Orange', year: 1971 },
        { title: 'Like Stars on Earth', year: 2007 },
        { title: 'Taxi Driver', year: 1976 },
        { title: 'Lawrence of Arabia', year: 1962 },
        { title: 'Double Indemnity', year: 1944 },
        {
            title: 'Eternal Sunshine of the Spotless Mind',
            year: 2004,
        },
        { title: 'Amadeus', year: 1984 },
        { title: 'To Kill a Mockingbird', year: 1962 },
        { title: 'Toy Story 3', year: 2010 },
        { title: 'Logan', year: 2017 },
        { title: 'Full Metal Jacket', year: 1987 },
        { title: 'Dangal', year: 2016 },
        { title: 'The Sting', year: 1973 },
        { title: '2001: A Space Odyssey', year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: 'Toy Story', year: 1995 },
        { title: 'Bicycle Thieves', year: 1948 },
        { title: 'The Kid', year: 1921 },
        { title: 'Inglourious Basterds', year: 2009 },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
    ];
    return (
        <>
            <div className='d-flex align-items-center search-bar gap-3 pt-5 px-4'>
                <div className='search-bar--input'>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={top100Films.map((option) => option.title)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                    </Stack>
                </div>
                <div className='search-bar--filter-icon' onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect width="48" height="48" rx="7.2" fill="#262626" />
                        <path d="M35.0998 23.1H33.2098C32.8498 21.57 31.4098 20.4 29.6998 20.4C27.9898 20.4 26.6398 21.57 26.1898 23.1H11.6998C11.1598 23.1 10.7998 23.46 10.7998 24C10.7998 24.54 11.1598 24.9 11.6998 24.9H26.1898C26.5498 26.43 27.9898 27.6 29.6998 27.6C31.4098 27.6 32.7598 26.43 33.2098 24.9H35.0998C35.6398 24.9 35.9998 24.54 35.9998 24C35.9998 23.46 35.6398 23.1 35.0998 23.1ZM29.6998 25.8C28.7098 25.8 27.8998 24.99 27.8998 24C27.8998 23.01 28.7098 22.2 29.6998 22.2C30.6898 22.2 31.4998 23.01 31.4998 24C31.4998 24.99 30.6898 25.8 29.6998 25.8Z" fill="#8E8E93" />
                        <path d="M35.1 15.9H20.61C20.25 14.37 18.81 13.2 17.1 13.2C15.39 13.2 14.04 14.37 13.59 15.9H11.7C11.16 15.9 10.8 16.26 10.8 16.8C10.8 17.34 11.16 17.7 11.7 17.7H13.59C13.95 19.23 15.39 20.4 17.1 20.4C18.81 20.4 20.16 19.23 20.61 17.7H35.1C35.64 17.7 36 17.34 36 16.8C36 16.26 35.64 15.9 35.1 15.9ZM17.1 18.6C16.11 18.6 15.3 17.79 15.3 16.8C15.3 15.81 16.11 15 17.1 15C18.09 15 18.9 15.81 18.9 16.8C18.9 17.79 18.09 18.6 17.1 18.6Z" fill="#8E8E93" />
                        <path d="M35.0998 30.2998H20.6098C20.2498 28.7698 18.8098 27.5998 17.0998 27.5998C15.3898 27.5998 14.0398 28.7698 13.5898 30.2998H11.6998C11.1598 30.2998 10.7998 30.6598 10.7998 31.1998C10.7998 31.7398 11.1598 32.0998 11.6998 32.0998H13.5898C13.9498 33.6298 15.3898 34.7998 17.0998 34.7998C18.8098 34.7998 20.1598 33.6298 20.6098 32.0998H35.0998C35.6398 32.0998 35.9998 31.7398 35.9998 31.1998C35.9998 30.6598 35.6398 30.2998 35.0998 30.2998ZM17.0998 32.9998C16.1098 32.9998 15.2998 32.1898 15.2998 31.1998C15.2998 30.2098 16.1098 29.3998 17.0998 29.3998C18.0898 29.3998 18.8998 30.2098 18.8998 31.1998C18.8998 32.1898 18.0898 32.9998 17.0998 32.9998Z" fill="#8E8E93" />
                    </svg>
                </div>
               
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Text" />
                            <FormControlLabel  control={<Checkbox />} label="Required" />
                            <FormControlLabel  control={<Checkbox />} label="Images" />
                        </FormGroup>
                    </MenuItem>
                </Menu>
            </div>
        </>
    )
}
