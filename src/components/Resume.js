import React from 'react';
import styles from './ResumeFormStyles.module.css';


class Resume extends React.Component{
  render(){
    return (
      <>
        <div className={styles.resume} >
          <div className={styles.resumeinfo}>
            
            {this.props.resumeName || this.props.resumeSurName 
            ? <h1 className={styles.name} >{`${this.props.resumeName} ${this.props.resumeSurName}`}</h1>
            : <h1>სახელი გვარი</h1>
            }
            
            {this.props.email
            ? <p className={styles.email}>{this.props.email}</p>
            : <p className={styles.email}>Email</p> 
            }

            {this.props.phoneNumber
            ? <p className={styles.phone}>{this.props.phoneNumber}</p>
            : <p className={styles.phone}>ტელეფონის ნომერი</p> 
            }

            {this.props.aboutMe
            ? <p className={styles.aboutme}>{this.props.aboutMe}</p>
            : <p className={styles.aboutme}>მოკლე ინფორმაცია შენ შესახებ</p>
            }
          </div>
          
            
          {this.props.photo 
          ?<img src={this.props.photo} />
          :<img src={require('../profPic.png')} alt='Something' />
        }

        </div>
      </>
    )
  }
}


export default Resume