export const GitData=async ()=>{
    const response=await fetch("https://api.github.com/users/salihbstg");
    const data=await response.json();
    return data.avatar_url;
}