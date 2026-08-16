"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function MassBlockdatesPage() {
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1));

  const [unavailableDates, setUnavailableDates] = useState<string[]>([
    "2026-08-05",
  ]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const formatDate = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const toggleDate = (day: number) => {
    const date = formatDate(day);

    setUnavailableDates((prev) =>
      prev.includes(date)
        ? prev.filter((item) => item !== date)
        : [...prev, date]
    );
  };

  const handleSubmit = () => {
    console.log("Unavailable fundraiser dates:", unavailableDates);
  };

  const calendarDays: (number | null)[] = [];

  // Empty spaces before the first day
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Days of the current month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <Box sx={{ p: 4, maxWidth: "100%" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#1a1a1a",
          }}
        >
          Dates Unavailable for Fundraisers
        </Typography>

        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/manage-content/fundraisers")}
          sx={{
            borderColor: "#9C0752",
            color: "#9C0752",
            "&:hover": {
              backgroundColor: "rgba(156, 7, 82, 0.04)",
              borderColor: "#7a0541",
            },
            textTransform: "none",
            fontWeight: 600,
            fontSize: "14px",
            borderRadius: 1,
          }}
        >
          Back to Fundraisers
        </Button>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          color: "#444",
          fontSize: "14px",
          mb: 3,
        }}
      >
        Any date selected in the calendar will be unavailable for
        fundraisers. Click on a date to change its availability.
      </Typography>

      {/* Centered Calendar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: 360,
            border: "1px solid #e0e0e0",
            borderRadius: 2,
            p: 2,
            backgroundColor: "#fff",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Month Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <IconButton
              onClick={previousMonth}
              size="small"
              sx={{
                color: "#9C0752",
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "17px",
              }}
            >
              {monthName} {year}
            </Typography>

            <IconButton
              onClick={nextMonth}
              size="small"
              sx={{
                color: "#9C0752",
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>

          {/* Week Days */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              mb: 1,
            }}
          >
            {weekDays.map((day) => (
              <Typography
                key={day}
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "13px",
                  color: "#555",
                }}
              >
                {day}
              </Typography>
            ))}
          </Box>

          {/* Dates */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: 0.5,
            }}
          >
            {calendarDays.map((day, index) => {
              if (!day) {
                return <Box key={index} />;
              }

              const date = formatDate(day);
              const isUnavailable = unavailableDates.includes(date);

              return (
                <Button
                  key={day}
                  onClick={() => toggleDate(day)}
                  sx={{
                    minWidth: 0,
                    width: 40,
                    height: 40,
                    p: 0,
                    mx: "auto",
                    borderRadius: 1,
                    fontSize: "14px",
                    fontWeight: isUnavailable ? 700 : 400,
                    color: isUnavailable ? "#fff" : "#333",
                    backgroundColor: isUnavailable
                      ? "#9C0752"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: isUnavailable
                        ? "#7a0541"
                        : "rgba(156, 7, 82, 0.08)",
                    },
                  }}
                >
                  {day}
                </Button>
              );
            })}
          </Box>

          {/* Today */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Button
              onClick={() => {
                const today = new Date();

                setCurrentDate(
                  new Date(today.getFullYear(), today.getMonth(), 1)
                );
              }}
              sx={{
                color: "#9C0752",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Today
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Submit Button */}
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#9C0752",
            "&:hover": {
              backgroundColor: "#7a0541",
            },
            textTransform: "none",
            fontWeight: 600,
            fontSize: "14px",
            px: 4,
            py: 1,
            borderRadius: 1,
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}