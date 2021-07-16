export const saveToLocal = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data))
}
export const getFromLocal = (name) => {
    let data = localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : {}
    return data
}