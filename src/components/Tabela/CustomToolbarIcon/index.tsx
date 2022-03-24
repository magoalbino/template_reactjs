import { IconButton, Tooltip } from "@mui/material";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { queryClient } from "../../../services/queryClient";

export function ToolbarRefreshIcon() {
  async function handleClick() {
    await queryClient.refetchQueries({ active: true });
  }

  return (
    <>
      <Tooltip title="Recarregar dados">
        <IconButton onClick={handleClick}>
          <RefreshOutlinedIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}
