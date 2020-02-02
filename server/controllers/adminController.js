const Post = require('../models/PostModel').Post;
const {isEmpty} = require('../config/customFunctions');
module.exports = {

submitPosts: (req, res) => {
    const commentsAllowed = req.body.allowComments ? true : false;
        // Check for any input file
        let filename = '';
       if(!isEmpty(req.files)) {
          console.log(req.files);
           let file = req.files.uploadedFile;
           filename = file.name;
           let uploadDir = __dirname + '/../public/uploads/';
           imgUrl=filename
           console.log(imgUrl);
           file.mv(uploadDir+filename, (err) => {
               if (err)
                   throw err;
           });
       }
        const newPost = new Post({
            type: req.body.title,
            short_description:req.body.short_description,
            long_description: req.body.long_description,
            category: req.body.category,
            file: `/uploads/${filename}`
        });
        newPost.save().then(post => {
            req.flash('success-message', 'Post created successfully.');
            res.redirect('/admin/posts');
        });
    },
  };
