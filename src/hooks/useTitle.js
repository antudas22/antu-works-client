import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Antu Works`;
    }, [title])
};

export default useTitle;