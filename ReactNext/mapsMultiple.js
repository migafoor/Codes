//found working in AddOfficials of college proj
const seldeptroles=data.roles;
{Object.values(seldeptroles).map((value) => {
    const newuser = value.roleContacts.map((roleContacts) => ({
        contactId:roleContacts.contact._id,
        contactName:roleContacts.contact.contactName
    }));
    newuser.forEach(contact => {
        let newuserid = contact.contactId;
        console.log('roleContact thru value id out', newuserid);
       // setAllRoleUsers(...allRoleUsers, ...newuserid);
        setAllRoleUsers ((allRoleUsers) => ([...allRoleUsers, newuserid]));
    });
    console.log('roleContact thru value obj out', newuser);
   //setAllRoleUsers ((allRoleUsers) => ([...allRoleUsers, ...newuserid]));
})}

//////////////////////////////// couldn't get working
            const objMap = Object.keys(list).map((key) => {
                return list[key].map((station) => {
                    station : station[key].station
                    description : station[key].description
                })
            });
            //////
            
            const bodyrolecontacts = data.map(role => role.map(roleContact =>role.map(contact => contact._id ) ));

            const objMaps = Object.keys(list).map((key) => {
                return list[key].map((station) => {
                    station : station[key].station
                    description : station[key].description
                })
            });
/////////////////////
            const roleusers = Object.keys(seldeptroles).map((key) => {
                return seldeptroles[key].map((role) => {
                    roleContacts : role[key].station
                    description : station[key].description
                })
            });

///////////////////////

{Object.values(seldeptroles).map((value) => {
    return value.map((roleContacts) => {
        console.log('roleContact thru value',roleContacts);
        // you should return something here
    })
})}








