/*get the button element using a regular event listener to add values to an array*/

const add = document.getElementById('addme')

/*the array for storing the objects that is the drug details*/
let drugs =[]


/**on click of this button, this event runs whereby it collects the values in the field and creates an object */
add.addEventListener('click', (e)=>
{
    /**create the object */

    let drugdetails = 
    {
        drugname: document.getElementById('name').value,
        drugid: document.getElementById('drugid').value

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

        render += "<p>" + drug.drugname + " (" + drug.drugid + ")</p>";
    });

    divdisplay.innerHTML = render;
}

);

/**another button to display the details in a div */

const display = document.getElementById('display')
const divdisplay = document.getElementById('displayingdrugs')


/**event that happens when button to display drg details is clicked in a div*/