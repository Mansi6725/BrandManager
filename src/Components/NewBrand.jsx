import React from 'react'
import FormComponent from './steps/FormComponent'
import { formdata } from './common/FormData'
import { useResetRecoilState } from 'recoil'

const NewBrand = () => {
  const resetData=useResetRecoilState(formdata)
  resetData();

  return (
    <div>
      <FormComponent/>
    </div>
  )
}

export default NewBrand
