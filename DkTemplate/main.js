(() => {
    document.addEventListener('click',function(ev){
        if(ev.target && ev.target.name== 'deleteRow'){
            ev.target.parentElement.parentElement.remove();
        }

        if(ev.target && ev.target.id== 'addRow'){
            var key = document.getElementById('metaNewKey').value;
            var value = document.getElementById('metaNewValue').value;

            var tr = document.createElement("tr"); 
            tr.role = "row";
            
            var td = document.createElement("td");
            var input = document.createElement('input');
            td.append(document.createTextNode(key));
            tr.append(td);
            
            var td = document.createElement("td");
            var input = document.createElement('input');
            input.name = "meta_"+key;
            input.value = value;
            input.style = "width:100%;";
            td.append(input);
            tr.append(td);
            
            var td = document.createElement("td");
            var input = document.createElement('button');
            input.classList.add('ui-button');
            input.classList.add('ui-widget');
            input.classList.add('ui-state-default');
            input.classList.add('ui-corner-all');
            input.name = "deleteRow";
            input.value = "Delete";
            input.type = "button";
            var span = document.createElement('span');
            span.classList.add('ui-button-text');
            span.append(document.createTextNode('Delete'));
            input.append(span);
            td.append(input);
            tr.append(td);
            
            ev.target.parentElement.parentElement.parentElement.insertBefore(tr, ev.target.parentElement.parentElement);
            document.getElementById('metaNewKey').value = "";
            document.getElementById('metaNewValue').value = "";
        }
     })

})();