import React from "react";

const Profile = () => {
    const user = {
        name: "Bhawadharani ML",
        email: "dharanibhawa@gmail.com", 
        bio: "Creating my sunshine",
        avatar: "https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp", 
        
    };

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "100vh", 
            backgroundColor:"#f4f4f4"
        }}>
            <div style={{ 
                backgroundColor: "orange", 
                padding: "20px", 
                borderRadius: "10px", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
                textAlign: "center", 
                width: "300px" 
            }}>
                <img 
                    src={user.avatar} 
                    alt="User Avatar" 
                    style={{ 
                        width: "100px", 
                        height: "100px", 
                        borderRadius: "50%", 
                        marginBottom: "20px" 
                    }}
                />
                <h2>{user.name}</h2>
                <p style={{ color: "black", marginBottom: "10px" }}>{user.email}</p>
                <p>{user.bio}</p>
                <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                        display: "inline-block", 
                        marginTop: "20px", 
                        padding: "10px 20px", 
                        backgroundColor: "#0077b5", 
                        color: "white", 
                        textDecoration: "none", 
                        borderRadius: "5px", 
                        fontWeight: "bold", 
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
                    }}
                >
                  Follow on LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Profile;