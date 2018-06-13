import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
 
import {FileUpload} from '././../fileupload';
 
@Injectable()
export class UploadFileService {
 public image_name;
 public image_url;
 public new_image;
 public service;
 public node;

  constructor(private db: AngularFireDatabase) {}

 public result = '';
 public filekey;
  private basePath = '/services';
 

  randomString(length, chars) {
      
    for (var i = length; i > 0; --i) this.result += chars[Math.floor(Math.random() * chars.length)];
    return this.result;
}
  pushFileToStorage(fileUpload: FileUpload, progress: {percentage: number}) {
    const storageRef = firebase.storage().ref();
    this.filekey =  this.randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const uploadTask = storageRef.child(`${this.basePath}/${this.filekey}`).put(fileUpload.file);
    ;
     console.log(this.filekey);
   
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => {
        // fail
        console.log(error)
      },
      () => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL;  
        fileUpload.name = fileUpload.file.name
        this.image_name =  fileUpload.name;
        this.image_url = uploadTask.snapshot.downloadURL;
        this.saveFileData(fileUpload);
        
        this.service = {
          'title' : 'Null',
          'desciption' : 'Null',
          'phone_1' :'Null',
          'phone_2' : 'Null',
          'phone_3' : 'Null',
          'service_id': 'Null',
          'image1_url' : uploadTask.snapshot.downloadURL,
          'image2_url' : 'Null',
          'image3_url'  : 'Null',
          'provider' : 'Null',
          'videoUrl' : 'Null',
          'likes' : 0,
          'unlikes' : 0,
          'bookings' : 0,
          'purchases' : 0,
          'updated_at': '0000-00-00',
          'created_at' : '0000-00-00'
          
        }    
       // var a = this.db.list(`/services`).push(this.service);
        console.log(uploadTask.snapshot.downloadURL);
        localStorage.setItem('myurl', JSON.stringify(uploadTask.snapshot.downloadURL)); 
      }
    );
  }

// Get the data on a imagedata that has changed


 
  private saveFileData(fileUpload: FileUpload) {
   // this.db.list(`/imagesData`).push(fileUpload);
    
  }
  
  

}