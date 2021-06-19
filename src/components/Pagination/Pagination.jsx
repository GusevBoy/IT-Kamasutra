import { itemStyle, itemActive, itemLast, wrapper, dots } from './Pagination.module.css'
const Pagintaion = ({ totalUsersCount, pageSize, currentPage, onClick }) => {
    const pagesCount    = Math.ceil(totalUsersCount / pageSize)
    const breckpointOne = Math.round(pagesCount / 3)
    const breckpointTwo = Math.round(breckpointOne * 2)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    if (currentPage < 5) {
        pages = pages.slice(0, 6)
    } else if (currentPage >= pagesCount - 4) {
        pages = pages.slice(pagesCount - 6, pagesCount)
    } else if(currentPage < breckpointOne) {
        pages = pages.slice(currentPage - 5, currentPage + 1)
    } else if (currentPage >= breckpointOne && currentPage < breckpointTwo) {
        pages = pages.slice(currentPage - 3, currentPage + 2)
    } else if (currentPage >= breckpointTwo) {
        pages = pages.slice(currentPage - 2, currentPage + 4)
    }
    const getItem = (item, lastElement) => {
        return <span onClick={(e) => onClick(Number(e.currentTarget.innerText))} className={`${itemStyle} ${item === currentPage && itemActive} ${lastElement && itemLast}`}>{item}</span>
    }
    return (
        Boolean(pages.length) && (
            <div className={wrapper}>
            {currentPage >= breckpointOne && (
                <>
                    {getItem(1)}
                    <span className={dots}>...</span>    
                </>
            )}
            {pages.map((item, i) => getItem(item, i === pages.length - 1 ? true : false))}
            {currentPage < breckpointTwo && (
                <>
                    <span className={dots}>...</span>
                    {getItem(pagesCount)}
                </>
            )}

        </div>
        )
    );
}
 
export default Pagintaion;