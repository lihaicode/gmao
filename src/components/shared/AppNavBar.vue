<template>
  <Menubar :model="items">
    <template #start>
      <img
        alt="logo"
        src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
        height="40"
        class="p-mr-2"
      />
    </template>
    <template #end>
      <InputText placeholder="Rechercher" type="text" />
    </template>
  </Menubar>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Sites",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Nouveau",
              icon: "pi pi-fw pi-plus",
            },
            {
              separator: true,
            },
            {
              label: "Export",
              icon: "pi pi-fw pi-external-link",
            },
          ],
        },
        {
          label: "Matériel",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Nouveau",
              icon: "pi pi-fw pi-plus",
            },
            {
              label: "Inventaire",
              icon: "pi pi-fw pi-align-right",
            },
          ],
        },
        {
          label: "Techniciens",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "Nouveau",
              icon: "pi pi-fw pi-plus",
            },
            {
              label: "Search",
              icon: "pi pi-fw pi-users",
              items: [
                {
                  label: "Filter",
                  icon: "pi pi-fw pi-filter",
                  items: [
                    {
                      label: "Print",
                      icon: "pi pi-fw pi-print",
                    },
                  ],
                },
                {
                  icon: "pi pi-fw pi-bars",
                  label: "List",
                },
              ],
            },
          ],
        },
        {
          label: "Interventions",
          icon: "pi pi-fw pi-calendar",
          items: [
            {
              label: "Edit",
              icon: "pi pi-fw pi-pencil",
            },
            {
              label: "Archieve",
              icon: "pi pi-fw pi-calendar-times",
              items: [
                {
                  label: "Remove",
                  icon: "pi pi-fw pi-calendar-minus",
                },
              ],
            },
          ],
        },
        {
          label: "About",
          icon: "pi pi-fw pi-info-circle",
          to: "About"
        },
      ],
    };
  },
};
</script>
