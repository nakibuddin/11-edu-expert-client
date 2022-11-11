import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Edu Expert `
    },[title]);
};

export default useTitle;