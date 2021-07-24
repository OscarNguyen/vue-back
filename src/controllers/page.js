import Page from '../models/page'
import PageService from '../services/page'

//GET
export const getContent = async (req,res,next)=>{
  try{
    const type = req.params.type
    console.log(type)
   
      const result = await PageService.findContent(type)
      return res.json(result)
    
     
    
  }catch(err){
    // return res.status(400).json({error:"content not"})
    next(err)
  }
}

//POST
export const postContent = async (req,res,next)=>{
  try{
    const type = req.body.type
    const content = req.body.content

    const page = new Page({type,content})
    const createdPage = await PageService.createContent(page)
    return res.json(createdPage)
  }catch(err){
    next(err)
  }
}

//UPDATE
export const updateContent = async (req,res,next)=>{
  try{
    const type = req.body.type
    const content = req.body.content

    const result = await PageService.updateContent({type,content})
    return res.json(result)
    

  }catch(err){
    next(err)
  }
}