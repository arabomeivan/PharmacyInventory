/*get the button element using a regular event listener to add values to an array*/

const add = document.getElementById('add')

/*the array for storing the objects that is the drug details*/
let drugs =[]


/**on click of this button, this event runs whereby it collects the values in the field and creates an object */
add.addEventListener('click', (e)=>
{
    /**create the object */

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
    document.querySelector('form').reset()
    e.preventDefault()
    let render = "";

    
    /**Displays  */
    drugs.forEach(drug => {

        render += "<p>" + drug.drugid + drug.drugname + drug.drugtype + drug.route + drug.expirydate + drug.company +"</p>";
    });

    divdisplay.innerHTML = render;
}

);

/**another button to display the details in a div */

const divdisplay = document.getElementById('displayingdrugs')
