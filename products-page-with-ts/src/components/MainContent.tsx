import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext"
import { Tally3 } from "lucide-react";
import axios from "axios";
import BookCard from "./BookCard";

const MainContent = () => {
    const {
        searchQuery,
        selectCategory,
        minPrice,
        maxPrice,
        keyword
    } = useFilter();


    const [products, setProducts] = useState<any[]>([]);
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const itemsPerPage = 12;



    useEffect(() => {

        let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`

        if (keyword) {
            url = `https://dummyjson.com/products/search?q=${keyword}`
        }

        axios.get(url).then(response => {
            setProducts(response.data.products)
            console.log(response.data.products)
        }).catch(error => {
            console.error('error fetching the data', error)
        });
    }, [currentPage, keyword])

    const getFilteredProducts = () => {
        let filterProducts = products;

        if (selectCategory) {
            filterProducts = filterProducts.filter(product => product.category === selectCategory);
        }

        if (minPrice !== undefined) {
            filterProducts = filterProducts.filter(product => product.price >= minPrice)
        }

        if (maxPrice !== undefined) {
            filterProducts = filterProducts.filter(product => product.price <= maxPrice)
        }

        if (searchQuery) {
            filterProducts = filterProducts.filter(product => product.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
        }

        switch (filter) {
            case "expensive":
                return filterProducts.sort((a, b) => b.price - a.price)
            case "cheap":
                return filterProducts.sort((a, b) => a.price - b.price)
            case "popular":
                return filterProducts.sort((a, b) => b.rating - a.rating)
            default:
                return filterProducts;
        }

    }

    const filterProducts = getFilteredProducts();
    console.log(filterProducts);

    const totalProducts = 100;
    const totalPages = Math.ceil(totalProducts / itemsPerPage)


    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    const getPagginationsButton = () => {
        const buttons: number[] = [];
        let startPage = Math.max(1, currentPage - 2)
        let endPage = Math.min(totalPages, currentPage + 2)

        if (currentPage - 2 < 1) {
            endPage = Math.min(totalPages, endPage + (2 - currentPage - 1))
        }


        if (currentPage + 2 > totalPages) {
            startPage = Math.min(1, startPage - (2 - totalPages - currentPage))
        }

        for (let page = startPage; page <= endPage; page++) {
            buttons.push(page)
        }
        return buttons;
    }



    return (
        <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
            <div className="mb-5">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="relative mb-5 mt-5">
                        <button onClick={()=> setDropdownOpen(!dropdownOpen)} className="border px-4 py-2 rounded-full flex items-center">
                            <Tally3 className="mr-2"></Tally3>

                            {filter === 'all' ? 'Filter' : filter.charAt(0).toLocaleLowerCase() + filter.slice(1)}
                        </button>

                        {dropdownOpen && (
                            <div className="absolute bg-white border border-gray-300 rounded mt-2 w-full sm:w-40">
                                <button onClick={() => setFilter("cheap")} className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                                    Cheap
                                </button>

                                <button onClick={() => setFilter("expensive")} className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                                    Expensive
                                </button>

                                <button onClick={() => setFilter("popular")} className="block px-4 py-2 w-full text-left hover:bg-gray-200">
                                    Popular
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {filterProducts.map(product => (
                        <BookCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.thumbnail}
                            price={product.price} />
                    ))}
                    {/* Book card */}
                </div>


                <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
                    {/* previous */}
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="border px-4 mx-2 rounded-full">
                        previous
                    </button>
                    {/* 1,2,3,4,5 */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {
                            getPagginationsButton().map(page => (
                                <button className={`border px-4 py-3 mx-1 rounded-full ${page === currentPage ? 'bg-black text-white' : ""}`} onClick={() => handlePageChange(page)} key={page}>{page}</button>
                            ))
                        }
                    </div>
                    {/* next */}
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="border px-4 mx-2 rounded-full">
                        Next
                    </button>

                </div>

            </div>
        </section>
    )
}

export default MainContent