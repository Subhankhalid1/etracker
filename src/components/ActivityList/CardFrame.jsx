import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, removeItem, updateItem } from '../../store/actions/actions'
// import { useNavigate } from 'react-router-dom';
export default function Card ({ editClick, setEditClick, setSelectedItem, heading, success }) {
  const dispatch = useDispatch()
  // const navigate = useNavigate();
   

  const { data, loading } = useSelector(state => ({ ...state.data }))

  const deleteItem = _id => {
    // e.preventDefault()
    // console.log(_id)
    dispatch(removeItem(_id))
  }
  const editItem = item => {
    setEditClick(true)
    setSelectedItem(item)
    // console.log('editItem---->', item)
    // navigate(`/update/${item._id}`)
  }

  //  console.log("-------000", data);
  return (
    <div>
       <section className="text-center bygga-parent equip-parent py-3">
        {heading !== false && (
          <section className="container text-center mt-4">
            <span
              className=" h2 bold"
              style={{ borderBottom: "3px solid #dc3545", color: "black" }}
            >
              {success ? success : "USER HISTORY LOG"}
            </span>
            <div className={success ? "my-4" : "mx-auto my-2 service-text"}>
              {!success && (
                <span className="text-center mt-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate exercitationem sequi
                </span>
              )}
            </div>
          </section>
        )}
      </section>
      {editClick !== true ? (
        <div className='container d-flex justify-content-center flex-wrap border'>
          {data?.length > 0 ? (
            data?.map((item, id) => (
              <div className='card m-3' style={{ width: '18rem' }} key={id}>
                <div className='card-body'>
                  <h5 className='card-title'>{item?.title}</h5>
                  <div className='d-flex justify-content-between p-1'>
                    <span> {item?.duration} minutes</span>
                    <span>{item?.activityType[0]} </span>
                  </div>
                  <p className='card-text'>{item?.description.slice(0, 75)}</p>
                 <p>{item?.date?.substring(0,10)} </p>
                 <div className='d-flex justify-content-between p-1'>
                  <a
                    className='card-link text-primary'
                    onClick={() => editItem(item)}
                  >
                  <i class="fa-solid fa-2x fa-pen-to-square"></i>
                  </a>
                 
                  <a
                    className='card-link text-danger'
                    onClick={() => deleteItem(item._id)}
                  >
                    <i class="fa-solid fa-2x fa-trash"></i>
                  </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className='border mt-5'> Not Found Yet.</h3>
          )}
        </div>
      ) : null}
    </div>
  )
}
