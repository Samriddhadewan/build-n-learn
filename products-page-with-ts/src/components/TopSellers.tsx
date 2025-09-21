import { useEffect, useState } from "react"

interface Author{
    name: string;
    isFollowing: boolean;
    image: string
}

const TopSellers = () => {

    const [authors, setAuthors] = useState<Author []>([]);

    useEffect(()=>{
        const fetchData =async ()=>{
            try {
            const response = await fetch('https://randomuser.me/api/?results=5')
            const data = await response.json();
            
            const authorsData : Author[] = data.results.map((user: any)=>({
                name: `${user.name.first} ${user.name.last}`,
                isFollowing: false,
                image: user.picture.medium
            }))

            setAuthors(authorsData)


            
        } catch (error) {
            console.error(`error fetching authors`, error)
        }
        }
        fetchData()
    },[])

    console.log(authors)

  return (
    <div className="bg-white p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
        <h2 className="text-xl font-bold mb-5">Top sellers</h2>
        
    </div>
  )
}

export default TopSellers