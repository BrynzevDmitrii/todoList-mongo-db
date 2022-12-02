import  Jwt  from "jsonwebtoken";

export default (req, res, next) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, '');
    if(token){
        try {
            const decoder = Jwt.verify(token, 'secret123');
            req.userId = decoder._id
            next();

        } catch (error) {
            res.status(403).json({
                massage:"Нет доступа", 
            })
        }
    }else {
        return res.status(403).json({
            massage:"Нет доступа", 
        })
    }
    
}