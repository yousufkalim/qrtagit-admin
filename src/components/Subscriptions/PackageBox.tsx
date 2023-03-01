import React, { FC } from 'react';
import { TextField } from '@mui/material';
import editImg from '../../assets/Subscription/edit.svg';

interface PackageBoxProps {
  onChange: any;
  handleSave: any;
  handleEdit: any;
  packageDescription: string;
  freePeriodDescription: string;
  valueFreePeriod: string;
  valuePackageDescription: string;
  heading: string;
  edit: boolean;
}

const PackageBox: FC<PackageBoxProps> = (props) => {
  const {
    onChange,
    handleSave,
    handleEdit,
    packageDescription,
    freePeriodDescription,
    valueFreePeriod,
    valuePackageDescription,
    heading,
    edit,
  } = props;
  return (
    <>
      {edit ? (
        <div className="package-box">
          <div className="header-div">{heading}</div>
          <div className="below-header">
            <div>
              <h2 className="heading">Package Description</h2>
              <TextField
                name="packageDescription"
                value={valuePackageDescription}
                onChange={onChange}
                fullWidth
              />
            </div>
            <div>
              <h2 className="heading">Free period</h2>
              <TextField
                name="freePeriod"
                value={valueFreePeriod}
                onChange={onChange}
                fullWidth
                placeholder="2 months"
              />
            </div>
            <button onClick={handleSave} className="saveBtn">
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="package-box">
          <div className="header-div">
            {heading}
            <div>
              <img style={{ cursor: 'pointer' }} src={editImg} onClick={handleEdit} alt="" />
            </div>
          </div>
          <div className="below-header">
            <div>
              <h2 className="heading">Package Description</h2>
              <span className="pkg-description">{packageDescription}</span>
            </div>
            <div className="divider"></div>
            <div>
              <h2 className="heading">Free period</h2>
              <span className="pkg-description">{freePeriodDescription}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PackageBox;
