

    /*get the button element using a regular event listener to add values to an array*/

    const add = document.getElementById('add')

    /*the array for storing the objects that is the drug details*/
    let drugs =[]
    let drugdetails ={}




  


    

    /**when button is clicked and if fiedls are empty an alert will be thrown */
        add.addEventListener('click', (e)=>
        {
            /**variables to validate the forms if empty an alert will be thrown if not */
            let a = document.getElementById('drugid').value
            let b = document.getElementById('drugname').value
            let c = document.getElementById('type').value
            let d = document.getElementById('route').value
            let x = document.getElementById('expirydate').value
            let f = document.getElementById('company').value

           

            
            /**converting the local storage druglist and storing it in variable get details so it's values can be used */
            
            
             
            /**if condition throwing alert if feilds are empty */
            if(a==""||b==""||c==""||d==""||x==""||f=="")
            {
                alert('Fields are empty')
            }   
            
            
             

             
            /**creates the object if fields are not discovered empty */
            else{
                   
            drugdetails = 
            {
                
                drugid: document.getElementById('drugid').value,
                drugname: document.getElementById('drugname').value,
                drugtype: document.getElementById('type').value,
                route: document.getElementById('route').value,
                expirydate: document.getElementById('expirydate').value,
                company: document.getElementById('company').value
            }
            
        
            /**pushes the object to be saved in the array */
            drugs.push(drugdetails)
            /**to clear the from */
            document.forms[0].reset();
            console.log('Just addded a drug', {drugs})

            
           /**Delete drug from the property */

           let del = document.getElementById

            e.preventDefault()
            let render = "";
        
            
            /**Displays  */
            drugs.forEach(drug => {
                render += "<tr>" + "<td>" + drug.drugid + "</td>" + "<td>" + drug.drugname + "</td>" + "<td>" + drug.drugtype + "</td>" + "<td>"+ drug.route +"</td>" + "<td>"+ drug.expirydate +"</td>" + "<td>"+ drug.company + "</td>"+ "<td>" +"<button class='btn btn-primary'>Delete" + "</button>" + "</td>" + "</tr>"
            });

            
            const divdisplay = document.getElementById('displayingdrugs')

            divdisplay.innerHTML = render;
            /**Saving to local storage */
            localStorage.setItem('Druglist', JSON.stringify(drugs));

            let getdetails= JSON.parse(localStorage.getItem('Druglist'))
            console.log(getdetails[0].drugid)


          }

              /**to validate a user not entering the same drug id */
             if(a===getdetails[0].drugid)
             {
                 alert ('Drug Id has been inserted already')
             }
              
                
        }
        );
    
            

/**let del = document.getElementById(drugs.indexOf(drug))

del.addEventListener('click', (e)=>
{
    drugs.splice(drugs.indexOf(drug))
   
});**/

/**on click of this button, this event runs whereby it collects the values in the field and creates an object */


/**another button to display the details in a div */
