import { UserData } from "../App"

interface UserCardProp {
 userDetail: UserData
}

const UserCard = ({userDetail}:UserCardProp) => {

  return (
<>
    <div>
        <img src={userDetail.companyLogo} alt="" />
        <p>{userDetail.companyName}</p>
        <p>{userDetail.citation}</p>
        <p>{userDetail.dateOfHire}</p>
        <p>{userDetail.employeeID}</p>
        <p>{userDetail.employeeName}</p>
        <p>{userDetail.incidentDate}</p>
        <p>{userDetail.letterDate}</p>
        <p>{userDetail.presidentName}</p>
    </div>
</>
  )
}

export default UserCard