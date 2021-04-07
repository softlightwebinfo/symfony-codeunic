<style lang="scss">
  @import "index";
</style>
<script>
  let value = 0;
  let secondValue = 0;
  let numbers = Array.from({length: 10}, (_, i) => i)
  let symbol = "";
  let isDelete = true;
  let optionsTop = ["c", "+/-", "%", "/", "x", "-", "+", "=", ","]
  const onNumberClick = (numberValue) => () => {
    isDelete = false;
    if (symbol && !secondValue) {
      secondValue = value;
      value = "";
    }
    if (!value) {
      value = numberValue;
    } else {
      value += numberValue.toString();
    }
  };

  const onActionClick = (option) => () => {
    if (symbol === option) {
      symbol = "";
      return;
    }
    if (option === "=") {
      switch (symbol) {
        case "/": {
          value = secondValue / value;
          break;
        }
        case "x": {
          value = secondValue * value;
          break;
        }
        case "-": {
          value = secondValue - value;
          break;
        }
        case "+": {
          value = secondValue + value;
          break;
        }
        case "%": {
          value = secondValue % value;
          break;
        }
      }

      symbol = "";
      secondValue = "";
      return;
    }
    switch (option) {
      case "c": {
        value = value.toString().slice(0, -1) || 0;
        isDelete = !value;
        if (isDelete) {
          value = 0;
          secondValue = 0;
          symbol = "";
        }
        break;
      }
      case "+/-": {
        value *= -1;
        break;
      }
      case ",": {
        if (!value.toString().includes(",")) {
          value += ",";
        }
        break;
      }
      default: {
        symbol = option;
      }
    }
  }
</script>

<div class="calculator">
  <header>
    <label>
      <input bind:value={value} readonly type="text">
    </label>
  </header>
  {#each optionsTop as option}
    <button class:symbol={option === symbol} data-order="{option}" on:click={onActionClick(option)}>
      {option === "c" ? isDelete ? "AC" : option : option}
    </button>
  {/each}
  {#each numbers as number}
    <button data-order="{number}" on:click={onNumberClick(number)}>
      {number}
    </button>
  {/each}
</div>
