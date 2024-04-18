import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainProfile } from "../../../redux/actions";

function AboutMe() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainProfile());
  }, []);
  
  const mainProfile = useSelector(state => state.mainProfile);
  
  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <img src={mainProfile?.media?.img?.[0]?.URL} alt="Profile" className="w-32 h-32 rounded-full" />
        </div>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="mb-4">
          <strong>profileFullName:</strong> {mainProfile?.profileFullName}
        </div>
        <div className="mb-4">
          <strong>profileNickName:</strong> {mainProfile?.profileNickName}
        </div>
        <div className="mb-4">
          <strong>profileInitials:</strong> {mainProfile?.profileInitials}
        </div>
        <div className="mb-4">
          <strong>Social Media:</strong> 
          <ul>
            {mainProfile?.socialMedia?.map((social, index) => (
              <li key={index}>
                <strong>{social.name}: </strong>
                <a href={social.link}>{social.user}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <strong>Bio:</strong> 
          <ul>
            <li>
              <strong>Age:</strong> {mainProfile?.bio?.[0]?.age}
            </li>
            <li>
              <strong>Birth:</strong> {mainProfile?.bio?.[0]?.birth}
            </li>
            <li>
              <strong>Height:</strong> {mainProfile?.bio?.[0]?.height}
            </li>
            <li>
              <strong>Weight:</strong> {mainProfile?.bio?.[0]?.weight}
            </li>
            <li>
              <strong>Gender:</strong> {mainProfile?.bio?.[0]?.gender}
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <strong>Contact:</strong> 
          <ul>
            <li>
              <strong>Cellphone:</strong> {mainProfile?.contact?.[0]?.cellphone}
            </li>
            <li>
              <strong>Email:</strong> {mainProfile?.contact?.[0]?.email}
            </li>
            <li>
              <strong>Website:</strong> <a href={mainProfile?.contact?.[0]?.website}>{mainProfile?.contact?.[0]?.website}</a>
            </li>
            <li>
              <strong>Location:</strong> {mainProfile?.contact?.[0]?.location}
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default AboutMe;
