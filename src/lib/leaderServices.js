export const getRecentLeaders=()=>{
  return  fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent").
  then(res=>res.json());
}

export const getAllTimeLeaders=()=>{
  return  fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime").
  then(res=>res.json());
}
