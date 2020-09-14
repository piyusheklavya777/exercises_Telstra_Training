router.get('/secret', function(req,res) {
    const authHeader = req.header('Authorization');
    console.log(authHeader)
})
