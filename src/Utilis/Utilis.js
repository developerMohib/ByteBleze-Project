
const getBlog = () => {
    const getItem = localStorage.getItem('blogs');
    if(getItem){
        // console.log(getItem)
        return JSON.parse( getItem )
    }
    return []
}

const saveBlog = () => {
    const saveItem = getBlog();
    localStorage.setItem('blogs', saveItem)
}

export {getBlog, saveBlog}