/*get the button element using a regular event listener to add values to an array*/

const add = document.getElementById('add')

/*the array for storing the objects that is the drug details*/
let drugs =[]



/**variables to validate the forms if empty an alert will be thrown if not */
  


    

    /**when button is clicked and if fiedls are empty an alert will be thrown */
        add.addEventListener('click', (e)=>
        {
            let a = document.getElementById('drugid').value
            let b = document.getElementById('drugname').value
            let c = document.getElementById('type').value
            let d = document.getElementById('route').value
            let x = document.getElementById('expirydate').value
            let f = document.getElementById('company').value

            /**if condition throwing alert if feilds are empty */
            if(a==""||b==""||c==""||d==""||x==""||f=="")
            {
                alert('Fields are empty')
            }
              
                  /**create the object */
        
        else{
            let drugdetails = 
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
            console.log('Just addded a drug', {drugs})

            /**to clear the from */

           

            e.preventDefault()
            let render = "";
        
            
            /**Displays  */
            drugs.forEach(drug => {
                render += "<tr>" + "<td>" + drug.drugid + "</td>" + "<td>" + drug.drugname + "</td>" + "<td>" + drug.drugtype + "</td>" + "<td>"+ drug.route +"</td>" + "<td>"+ drug.expirydate +"</td>" + "<td>"+ drug.company + "</td>"+ "<td>" +"<button class='btn btn-primary'>Delete" + "</button>" + "</td>" + "</tr>"
            });
        
            divdisplay.innerHTML = render;

              }  
        }
        );
    

/**on click of this button, this event runs whereby it collects the values in the field and creates an object */


/**another button to display the details in a div */

const divdisplay = document.getElementById('displayingdrugs')
