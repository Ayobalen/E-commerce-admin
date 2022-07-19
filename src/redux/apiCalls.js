import { publicRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFaillure} from "./userRedux";
import { getProductStart, getProductSuccess, getProductFailure } from "./productRedux";
import { deleteProductStart, deleteProductSuccess, deleteProductFailure } from "./productRedux";
import { updateProductStart, updateProductSuccess, updateProductFailure } from "./productRedux";
import { addProductStart, addProductSuccess, addProductFailure } from "./productRedux";


export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
       const res = await publicRequest.post("/auth/login",user)
       console.log(res.data)
       dispatch(loginSuccess(res.data));
    }catch(err){
      dispatch(loginFaillure());  
    }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try{
     const res = await publicRequest.get("/products")
     
     dispatch(getProductSuccess(res.data));
  }catch(err){
    dispatch(getProductFailure());  
  }
}

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try{
    // const res = await publicRequest.delete(`/products/${id}`)
     
     dispatch(deleteProductSuccess(id));
  }catch(err){
    dispatch(deleteProductFailure());  
  }
}

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try{
     // UPDATE
     dispatch(updateProductSuccess({ id, product }));
  }catch(err){
    dispatch(updateProductFailure());  
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try{
      const res = await publicRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  }catch(err){
    dispatch(addProductFailure());  
  }
}


