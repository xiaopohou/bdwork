/**
 * Created by soul on 2015/12/26.
 */
var mongoose=require("mongoose");
var Schema=mongoose.Schema,
    ObjectId=Schema.ObjectId
var RoomSchema=new Schema({
    name:{type:String},
    music:[{type:ObjectId,ref:"Music"}],
    backgroundImg:[{
        name:String,
        url:String
    }],
    sid:{type:Number,default:0},
    createAt:{type: Date, default: Date.now}
})



RoomSchema.statics={
    getRooms:function(cb){
        return this.find({}).exec(cb)
    },
    getMusics:function(roomId,cb){
        return this.findOne({_id:roomId}).populate("music").exec(cb)
    }
}




var Room=mongoose.model("Room",RoomSchema)
module.exports=Room