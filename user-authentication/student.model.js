import mongoose from "mongoose";

const student_schema=new mongoose.Schema({

        staff:{type:String},

        studentid:{type:String},
        
        address:{type:String},
        
        batch:{type:String},
        
        email:{type:String},
        
        fullname:{type:String},
        
        attandance:{type:String},
        
        phonenumber:{type:String},
        
      
        date:{type:String}, 

        internal:{
            internalphysics:{type:String
            },   
            internalmaths:{type:String
            },   
            internalchemistry:{type:String
            },
        },
            test:{
            testphysics:{type:String
            },   
            testmaths:{type:String
            },   
            testchemistry:{type:String
            },  
         },
        semester:{type:String},

        course:{type:String},
           
        photo:{type:String}    

})

export default mongoose.model.student||mongoose.model("student",student_schema)