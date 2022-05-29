import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";

export default function Home() {
  const { cars , loading} = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(getAllCars())
  },[])

  return (
    <DefaultLayout>
      <h1>Home page</h1>
      <h1>{cars.length}</h1>
    </DefaultLayout>
    )}