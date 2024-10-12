import { useMemo, useState } from 'react';
import './Pagination.css';
import axios from 'axios';


const Pagination = ({setProducts, total, setTotal}) => {

    const [current, setCurrent] = useState(1);
    const pages = useMemo(() => Math.ceil(total / 30), [total]);

    const handlePageChange = async newPageNo => {

        const start = newPageNo * 30 - 29
        const response = await axios.get(`http://localhost:8000/api/product/30/${start}`)
            if(response.status == 200){
                const records = response.data.products;
                const total = response.data.total;
                
                setProducts(records);
                setTotal(total);
            }
        
            setCurrent(newPageNo);
    }

    const paginationRange = () => {

        let range = [];

        if (pages == 1){
            return range;
        };

        if (pages <= 10){
            range = Array.from({length: pages}, (_, index) => index+1);
            return range;
        } 

        if (current < 5){
            range = Array.from({length: 5}, (_, index) => index+1);
            return [...range, "...", pages];
        }

        if (current >= 5 && current <= pages-4){
            range = [1, '...', current-2, current-1, current, current+1, current+2, '...', pages];
            return range;
        } else {
            return [1, '...', pages-4, pages-3, pages-2, pages-1, pages];
        }
        
    }

    return (
        <div className="pagination">
            <ul className='page-nos'>
            {paginationRange().map((pageNo, index) => {
                if (typeof pageNo == 'number'){
                    return (
                        <li key={index} className={current == pageNo ? 'active': ''}
                        onClick={() => handlePageChange(pageNo)}
                        >{pageNo}</li>
                    )
                } else {
                    return (
                        <span>...</span>
                    )
                }
                
            })}
            </ul>
        </div>
    )
}

export default Pagination;