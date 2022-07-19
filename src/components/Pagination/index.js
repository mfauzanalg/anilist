import Pagination from '@mui/material/Pagination';

const CustomPagination = ({ count, setQuery, query, page }) => {

  const onPaginationChange = (e, currentPage) => {
    console.log(e, currentPage)
    const temp = { ...query }
    temp.page = currentPage
    setQuery(temp)
  }

  return (
    <Pagination
      page={page}
      count={count}
      color='primary'
      onChange={onPaginationChange}
      sx={{
        '& .MuiPaginationItem-root': {
          color: 'white'
        },
        '& .Mui-selected': {
          backgroundColor: '#870800 !important'
        }
      }}
    />
  )
}

export default CustomPagination