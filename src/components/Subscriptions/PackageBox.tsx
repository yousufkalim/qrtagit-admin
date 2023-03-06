import React, { FC, memo } from 'react';
import { TextField } from '@mui/material';
import editImg from '../../assets/Subscription/edit.svg';

interface IPackage {
  name: string;
  description: string;
  free_period: string;
  id: number | null;
}
interface PackageBoxProps {
  onChange: any;
  handleSave: (pkg: IPackage) => void;
  handleEdit: () => void;
  handleSaveEdit: (pkg: IPackage) => void;
  edit: boolean;
  pkg: IPackage;
  isNew: boolean;
}

const PackageBox: FC<PackageBoxProps> = (props) => {
  const { onChange, handleSave, handleEdit, handleSaveEdit, isNew, edit, pkg } = props;

  return (
    <>
      {edit ? (
        <div className="package-box">
          <div className="header-div">{pkg.name}</div>
          <div className="below-header">
            <div>
              <h2 className="heading">Package Description</h2>
              <TextField
                name="description"
                value={pkg?.description}
                onChange={onChange}
                fullWidth
              />
            </div>
            <div>
              <h2 className="heading">Free period</h2>
              <TextField
                name="free_period"
                value={pkg?.free_period}
                onChange={onChange}
                fullWidth
                placeholder="2 months"
              />
            </div>
            <button
              onClick={() => {
                isNew ? handleSave(pkg) : handleSaveEdit(pkg);
              }}
              className="saveBtn"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="package-box">
          <div className="header-div">
            {pkg?.name}
            <div>
              <img style={{ cursor: 'pointer' }} src={editImg} onClick={handleEdit} alt="" />
            </div>
          </div>
          <div className="below-header">
            <div>
              <h2 className="heading">Package Description</h2>
              <span className="pkg-description">{pkg.description}</span>
            </div>
            <div className="divider"></div>
            <div>
              <h2 className="heading">Free period</h2>
              <span className="pkg-description">{pkg.free_period}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(PackageBox);
