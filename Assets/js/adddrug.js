/*get the button element using a regular event listener to add values to the local storage*/
const add = document.getElementById('add')

/*the array for storing the objects that is the drug details*/
let drugs = []

/**objects being used */
let drugdetails = {}
let systemidfordrug

/**when button is clicked verification and validation is done */
add.addEventListener('click', (e) => {
    
    /**generates a string of 6 random numbers, converts them to strings, 
     * and display starting the 2nd index of javascript precision(which is 16) */
    systemidfordrug = Math.random().toString(16).substring(2,8)


    /**getting values from all textfields for validation*/
    let id = document.getElementById('drugid').value
    let name = document.getElementById('drugname').value
    let type = document.getElementById('type').value
    let route = document.getElementById('route').value
    let productiondate = document.getElementById('productiondate').value
    let expirydate = document.getElementById('expirydate').value
    let company = document.getElementById('company').value

    /**if condition throwing alert if feilds are empty */
    if (id == "" || name == "" || type == "" || route == "" || expirydate == "" || company == "" || productiondate == "") {
        alert('Fields are empty')

    }

    /** if text fields are not empty collect the values and store them as objects*/
    else {


    /**create objects*/
        drugdetails = {

            drugid: document.getElementById('drugid').value,
            systemdrugid: systemidfordrug,
            drugname: document.getElementById('drugname').value,
            drugtype: document.getElementById('type').value,
            route: document.getElementById('route').value,
            productiondate: document.getElementById('productiondate').value,
            expirydate: document.getElementById('expirydate').value,
            company: document.getElementById('company').value
        }

        /**Now if the object are not empty push to local storage*/
        if (drugdetails != null) 
        {
            /**converts the local storage back into readeable data */
            let getdetails = JSON.parse(localStorage.getItem('Druglist'))
            if (getdetails == null) 
            {
                getdetails = [];
            }

            if (getdetails.length >= 1) { 
                /**Validation for checking if drug id is in the local storage */
                /**using for loop to be checking every index in the local storage to check if the ID exists */
                let found = false;
                 for(i=0; i< getdetails.length; i++)
                 {
                    if (id == getdetails[i].drugid && systemidfordrug ===getdetails[i].systemdrugid) 
                    {
                        found = true;
                    }

                 }

                 if (found) {
                    alert('Drug ID has been used')
                 } 
                 else 
                 {
                     /**pushes the object to be saved in the array */
                    drugs.push(drugdetails)

                    /**to clear the from */
                    document.forms[0].reset();
                    console.log('Just addded a drug', {
                        drugs
                    })

                    /**Saving to local storage */
                    localStorage.setItem('Druglist', JSON.stringify(drugs));

                    /**Displays  */
                    let render = "";
                    drugs.forEach(drug => {
                    render += "<tr>" + "<td>" + drug.systemdrugid + "</td>" + "<td>" + drug.drugname + "</td>" + "<td>" + drug.drugtype + "</td>" + "<td>" + drug.route + "</td>" + "<td>" + drug.expirydate + "</td>" + "<td>" + drug.company + "</td>" + "<td>" + "<button class='btn btn-primary delete-btn'>Delete" + "</button>" + "</td>" + "</tr>"

                    });
                 }
                

                
            } 
            /**it's not used push to local storage*/
            else 
            {
                /**pushes the object to be saved in the array */
                drugs.push(drugdetails)

                /**to clear the from */
                document.forms[0].reset();
                console.log('Just addded a drug', {
                    drugs
                })

                /**Saving to local storage */
                localStorage.setItem('Druglist', JSON.stringify(drugs));

                /**Displays  */
                let render = "";
                drugs.forEach(drug => {
                render += "<tr>" + "<td>" + drug.systemdrugid + "</td>" + "<td>" + drug.drugname + "</td>" + "<td>" + drug.drugtype + "</td>" + "<td>" + drug.route + "</td>" + "<td>" + drug.expirydate + "</td>" + "<td>" + drug.company + "</td>" + "<td>" + "<button class='btn btn-primary delete-btn'>Delete" + "</button>" + "</td>" + "</tr>"

                });

            }

            let render = "";
            drugs.forEach(drug => {
            render += "<tr>" + "<td>" + drug.systemdrugid + "</td>" + "<td>" + drug.drugname + "</td>" + "<td>" + drug.drugtype + "</td>" + "<td>" + drug.route + "</td>" + "<td>" + drug.productiondate + "</td>" +"<td>" + drug.date + "</td>" + "<td>" + drug.company + "</td>" + "<td>" + "<button class='btn btn-primary delete-btn'>Delete" + "</button>" + "</td>" + "</tr>"

            });
            const divdisplay = document.getElementById('displayingdrugs')
            divdisplay.innerHTML = render;

        }

    }

    e.preventDefault()

    
});
let deleteelement = document.getElementsByClassName('delete-btn');

