        // Load the checklist data from local storage
        let tableListData = localStorage.getItem("tableListData");
        tableListData = tableListData
          ? JSON.parse(tableListData)
          : [
              {
                id: "id0",
                title: "Criar de Tarefas",
                list: [],
              },
            ];

        if (tableListData.length > 0) {
          renderTables();
          tableListData.forEach((table) => {
            renderChecklist(table.id);
          });
        } else {
          renderChecklist("id0");
        }

        // Initialize the checklist table
        const tableBody = document.querySelector("#id0 tbody");

        // Generate a unique ID for new checklist items
        function generateItemId() {
          return Math.random().toString(36).substr(2, 9);
        }

        //Collapse title
        function collapseTitle(tableId) {
          console.log(tableId);
          const itemIndex = tableListData.findIndex(
            (item) => item.id === tableId
          );

          const tableBody = document.querySelector(`#${tableId.id}`);

          tableBody.classList.toggle("title-content-collapsed");
        }

        // Add a new checklist item
        function addTable() {
          const tableContainer = document.querySelector(".tab-tables-group");

          const table = document.createElement("div");
          table.classList.add("checklist-item");

          const id = `a${generateItemId()}`;

          table.setAttribute("id", id);

          table.innerHTML = `
            <hr/>
            <div class="title-content">
              <button onclick="collapseTitle(${id})">⬆️</button>
              <h2 class="title">Novo Titulo</h2>
              <div class="button-container-title">
                <button class="save-button" onclick="saveTitle('${id}')">Salvar</button>
                <button class="edit-button" onclick="editTitle('${id}')">Editar</button>
                <button class="edit-button" onclick="deleteTitle('${id}')">Deletar</button>
              </div>
            </div>

            <div class="tab-content-tables">
              <table >
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Descrição</th>
                    <th>Hora</th>
                    <th>Quantidade</th>
                    <th>Progresso</th>
                    <th>Completo</th>
                    <th>Prioritário</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>

            <button class="add-item-button" onclick="addItem('${id}')">
              Criar Tarefa
            </button>
            `;

          tableContainer.appendChild(table);

          tableListData.push({
            id,
            title: "Novo titulo",
            list: [],
          });
        }

        // Add a new checklist item
        function addItem(tableId) {
          const newItem = {
            id: generateItemId(),
            title: "",
            description: "",
            time: "",
            quantity: "",
            progresso: "",
            completed: false,
            priority: false,
          };

          const tableIndex = tableListData.findIndex(
            (item) => `${item.id}` === tableId
          );

          tableListData[tableIndex].list.push(newItem);

          renderChecklist(tableId);
          updateChart();
        }

        // Save a checklist item
        function saveItem(tableId, itemId) {
          const tableIndex = tableListData.findIndex(
            (item) => item.id === tableId
          );

          const itemIndex = tableListData[tableIndex].list.findIndex(
            (item) => item.id === itemId
          );

          if (tableIndex !== -1) {
            const tableBody2 = document.querySelector(`#${tableId} tbody`);

            const itemRow = tableBody2.children[itemIndex];

            const title = itemRow.querySelector(".title").textContent;
            const description = itemRow.querySelector(".description").textContent;
            const time = itemRow.querySelector(".time").textContent;
            const quantity = itemRow.querySelector(".quantity").textContent;
            const progresso = itemRow.querySelector(".progresso").textContent;

            const completed = itemRow.querySelector(
              'input[type="checkbox"]'
            ).checked;

            const priority = itemRow.querySelector(
              '.priority[type="checkbox"]'
            ).checked;

            tableListData[tableIndex].list[itemIndex] = {
              id: itemId,
              title,
              description,
              time,
              quantity,
              progresso,
              completed,
              priority,
            };

            // Save the checklist data to local storage
            localStorage.setItem("tableListData", JSON.stringify(tableListData));

            itemRow.classList.remove("checklist-item-editable");
            itemRow
              .querySelector(".title")
              .setAttribute("contenteditable", "false");
            itemRow
              .querySelector(".description")
              .setAttribute("contenteditable", "false");
            itemRow
              .querySelector(".time")
              .setAttribute("contenteditable", "false");
            itemRow
              .querySelector(".quantity")
              .setAttribute("contenteditable", "false");
            itemRow
              .querySelector(".progresso")
              .setAttribute("contenteditable", "false");

            renderChecklist(tableId);
            updateChart();
          }
        }

        // Edit a checklist item
        function editItem(tableId, itemId) {
          const tableIndex = tableListData.findIndex(
            (item) => item.id === tableId
          );

          const itemIndex = tableListData[tableIndex].list.findIndex(
            (item) => item.id === itemId
          );

          const tableContent = document.querySelector(`#${tableId} tbody`);

          if (itemIndex !== -1) {
            const itemRow = tableContent.children[itemIndex];
            itemRow.classList.add("checklist-item-editable");
            itemRow
              .querySelector(".title")
              .setAttribute("contenteditable", "true");
            itemRow
              .querySelector(".description")
              .setAttribute("contenteditable", "true");
            itemRow
              .querySelector(".time")
              .setAttribute("contenteditable", "true");
            itemRow
              .querySelector(".quantity")
              .setAttribute("contenteditable", "true");
            itemRow
              .querySelector(".progresso")
              .setAttribute("contenteditable", "true");
          }
        }

        // Delete a checklist item
        function deleteItem(tableId, itemId) {
          const tableIndex = tableListData.findIndex(
            (item) => item.id === tableId
          );

          const itemIndex = tableListData[tableIndex].list.findIndex(
            (item) => item.id === itemId
          );

          // const tableContent = document.querySelector(`#${tableId} tbody`);

          if (itemIndex !== -1) {
            tableListData[tableIndex].list.splice(itemIndex, 1);

            // Save the checklist data to local storage
            localStorage.setItem("tableListData", JSON.stringify(tableListData));

            renderChecklist(tableId);
            // updateChart();
          }
        }

        // Update the completion status of a checklist item
        function updateCompletionStatus(tableId, itemId) {
          const tableIndex = tableListData.findIndex(
            (item) => item.id === tableId
          );

          const itemIndex = tableListData[tableIndex].list.findIndex(
            (item) => item.id === itemId
          );

          const tableContent = document.querySelector(`#${tableId} tbody`);

          if (itemIndex !== -1) {
            const itemRow = tableContent.children[itemIndex];
            const completed = itemRow.querySelector(
              'input[type="checkbox"]'
            ).checked;

            tableListData[tableIndex].list[itemIndex].completed = completed;

            // Save the checklist data to local storage
            localStorage.setItem("tableListData", JSON.stringify(tableListData));

            updateChart();
            renderChecklist(tableId);
          }
        }

        // Update the completion priority of a checklist item
        function updateCompletionPriority(tableId, itemId) {
          const tableIndex = tableListData.findIndex(
            (item) => item.id === tableId
          );

          const itemIndex = tableListData[tableIndex].list.findIndex(
            (item) => item.id === itemId
          );

          const tableContent = document.querySelector(`#${tableId} tbody`);

          if (itemIndex !== -1) {
            const itemRow = tableContent.children[itemIndex];
            const priority = itemRow.querySelector(
              '.priority[type="checkbox"]'
            ).checked;

            tableListData[tableIndex].list[itemIndex].priority = priority;

            // Save the checklist data to local storage
            localStorage.setItem("tableListData", JSON.stringify(tableListData));

            updateChart();
            renderChecklist(tableId);
          }
        }

        // Update the pie chart with checklist data
        function updateChart() {
          const chartContainer = document.getElementById("chart-container");

          chartContainer.innerHTML = "";
          tableListData.forEach((item) => {
            const chartCanvas = document.getElementById(`chart${item.id}`);

            // If the chart has already been initialized, destroy it before creating a new one
            if (chartCanvas) {
              chartCanvas.remove();
            }

            const newCanvas = document.createElement("canvas");
            newCanvas.id = `chart${item.id}`;

            const title = document.createElement("h2");
            title.textContent = item.title;
            title.classList.add("chart-title");

            chartContainer.appendChild(title);
            chartContainer.appendChild(newCanvas);

            const ctx = newCanvas.getContext("2d");

            const completedCount = item.list.filter(
              (item) => item.completed
            ).length;

            const priorityCount =
              item.list.filter((item) => item.priority && !item.completed)
                .length > 0
                ? item.list.filter((item) => item.priority && !item.completed)
                    .length
                : 0;

            const incompleteCount =
              item.list.length - (completedCount + priorityCount) < 0
                ? 0
                : item.list.length - (completedCount + priorityCount);

            const data = {
              datasets: [
                {
                  data: [completedCount, priorityCount, incompleteCount],
                  backgroundColor: ["#63c965", "#e74c3c", "#e0e0e0"],
                },
              ],
              labels: ["Completo", "Prioritário", "Incompleto"],
            };

            new Chart(ctx, {
              type: "pie",
              data: data,
              options: {
                responsive: true,
                aspectRatio: 5,
              },
            });
          });
        }

        // Handle the click event on the tab buttons
        function openTab(event, tabName) {
          const tabContent = document.getElementsByClassName("tab-content");
          for (const content of tabContent) {
            content.style.display = "none";
          }

          const tabButtons = document.getElementsByClassName("tab-button");
          for (const button of tabButtons) {
            button.classList.remove("active");
          }

          document.getElementById(tabName).style.display = "block";
          event.currentTarget.classList.add("active");

          if (tabName === "Tab2") {
            updateChart();
          }
        }

        // Save the title of a checklist
        function saveTitle(tableId) {
          const itemIndex = tableListData.findIndex(
            (item) => item.id === tableId
          );

          const tableBody = document.querySelector(`#${tableId} .title`);

          if (itemIndex !== -1) {
            tableBody.setAttribute("contenteditable", "false");
            tableBody.classList.remove("title-content-editable");
          }

          tableListData[itemIndex].title = tableBody.textContent;

          console.log(tableListData);

          localStorage.setItem("tableListData", JSON.stringify(tableListData));

          renderChecklist(tableId);
        }

        // Edit the title of a checklist
        function editTitle(tableId) {
          const itemIndex = tableListData.findIndex(
            (item) => item.id === tableId
          );

          const tableBody = document.querySelector(`#${tableId} .title`);

          if (itemIndex !== -1) {
            tableBody.setAttribute("contenteditable", "true");
            tableBody.classList.add("title-content-editable");
          }

          renderChecklist(tableId);
        }

        // Delete a checklist
        function deleteTitle(tableId) {
          const itemIndex = tableListData.findIndex(
            (item) => item.id === tableId
          );

          // const tableContent = document.querySelector(`#${tableId} tbody`);

          if (itemIndex !== -1) {
            tableListData.splice(itemIndex, 1);

            // Save the checklist data to local storage
            localStorage.setItem("tableListData", JSON.stringify(tableListData));

            renderTables();
            tableListData.forEach((table) => {
              renderChecklist(table.id);
            });

            // updateChart();
          }
        }

        // Render the tables
        function renderTables() {
          const tableGroups = document.querySelector(`.tab-tables-group`);

          tableGroups.innerHTML = "";

          tableListData.forEach((item) => {
            const row = document.createElement("div");
            row.classList.add("checklist-item");
            row.setAttribute("id", item.id);
            row.innerHTML = `
              <hr/>
              <div class="title-content">
                <button onclick="collapseTitle(${item.id})">⬆️</button>
                <h2 class="title">${item.title}</h2>
                <div class="button-container-title">
                  <button class="save-button" onclick="saveTitle('${item.id}')">Salvar</button>
                  <button class="edit-button" onclick="editTitle('${item.id}')">Editar</button>
                  <button class="edit-button" onclick="deleteTitle('${item.id}')">Deletar</button>
                </div>
              </div>

              <div class="tab-content-tables">
                <table >
                  <thead>
                    <tr>
                      <th>Titulo</th>
                      <th>Descrição</th>
                      <th>Hora</th>
                      <th>Quantidade</th>
                      <th>Progresso</th>
                      <th>Completo</th>
                      <th>Prioritário</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>

              <button class="add-item-button" onclick="addItem('${item.id}')">
                Criar Tarefa
              </button>
              `;
            tableGroups.appendChild(row);
          });
        }

        // Render the checklist items
        function renderChecklist(tableId) {
          const tableBody2 = document.querySelector(`#${tableId} tbody`);

          const tableIndex = tableListData.findIndex(
            (item) => `${item.id}` === tableId
          );

          tableBody2.innerHTML = "";
          tableListData[tableIndex].list
            .sort((a, b) => b.priority - a.priority)
            .sort((a, b) => a.completed - b.completed)
            .forEach((item) => {
              const row = document.createElement("tr");
              row.classList.add("checklist-item");

              if (item.priority) {
                row.classList.add("checklist-item-priority");
              }

              if (item.completed) {
                row.classList.add("checklist-item-complete");
              }

              row.innerHTML = `
                <td  class="title" >
                  ${item.title}
                </td>


                <td class="description" >${item.description}</td>

                <td class="time" >${item.time}</td>
                <td class="quantity" >${item.quantity}</td>
                <td class="progresso">${item.progresso || ''}</td>

                <td>
                  <input type="checkbox" id="checkbox${item.id}" ${
                item.completed ? "checked" : ""
              } onchange="updateCompletionStatus('${
                tableListData[tableIndex].id
              }','${item.id}')">
    
                  <label class="checkbox-custom" for="checkbox${item.id}"></label>
                </td>

                <td>
                  <input type="checkbox" class="priority" id="checkboxPriority${
                    item.id
                  }" onchange="updateCompletionPriority('${
                tableListData[tableIndex].id
              }','${item.id}')" ${item.priority ? "checked" : ""} >

                  <label class="checkbox-custom checkbox-priority" for="checkboxPriority${
                    item.id
                  }"></label>
                </td>

                <td class="button-container">
                  <button class="save-button" onclick="saveItem('${
                    tableListData[tableIndex].id
                  }','${item.id}')">Salvar</button>
                  <button class="edit-button" onclick="editItem('${
                    tableListData[tableIndex].id
                  }','${item.id}')">Editar</button>
                  <button class="delete-button" onclick="deleteItem('${
                    tableListData[tableIndex].id
                  }','${item.id}')">Apagar</button>
                </td>
              `;
              tableBody2.appendChild(row);
            });
        }